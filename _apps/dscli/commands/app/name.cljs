(ns commands.app.name
  (:require [clojure.string :as str]
            [utils.display :refer [display]]
            [utils.exec :refer [exec]]))

(def ^:private command "app name")
(defn ^:private action []
  (let [project_type (cond
                       (str/includes? (exec "ls -la") "pages") "Next.js"
                       (str/includes? (exec "ls -la") "pubspec.yaml") "Flutter!"
                       :else "You must be in a `Next.js` or `Flutter project`")]
    (display project_type)))

(defn define [program]
  (-> program
      (.command command)
      (.action action)))