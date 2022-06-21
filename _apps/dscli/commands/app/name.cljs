(ns commands.app.name
  (:require [utils.display :refer [display display-color]] 
            [utils.platform :refer [run-in]] 
            [commands.app.config :as app.config]
            [clojure.string :as str]
            ["fs" :as fs]))


(defn ^:private app-platform-rename [app-platform]
  (let [new-name (:name (app.config/app-manifest))
        app-platform-name (first app-platform)
        output-color (:output-color (second app-platform))
        path (str app.config/running-at "/" (:path (second app-platform)))
        pattern (:pattern (second app-platform))
        result (:result (second app-platform))
        file-content-start (fs/readFileSync path #js {:encoding "utf-8"})
        file-content-updated (str/replace file-content-start (re-pattern pattern) (result new-name))] 
    (display (str (display-color (str "[" app-platform-name "]") output-color) " Renaming"))
    (fs/writeFileSync path file-content-updated #js {:encoding "utf-8"})
    (display (str (display-color (str "[" app-platform-name "]") output-color) " Done"))))


(def ^:private command "app-set-name")

(defn ^:private action [] 
  (mapv app-platform-rename (get app.config/config :name-paths)))

(defn define [program]
  (-> program
      (.command command)
      (.action (run-in [:flutter] action))))
