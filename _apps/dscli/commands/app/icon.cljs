(ns commands.app.icon
  (:require [utils.display :refer [display]]
            [utils.platform :refer [run-in]]))

(def ^:private command "app-set-icon")
(defn ^:private action []
  (let [msg "SET ICON..."]
    (display msg)))

(defn define [program]
  (-> program
      (.command command)
      (.action (run-in [:flutter] action))))
