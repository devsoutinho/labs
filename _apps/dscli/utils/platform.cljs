(ns utils.platform
  (:require [utils.exec :refer [exec]]
            [clojure.string :as str]))

(defmulti platform-is
  (fn [files-in-folder _] files-in-folder))

(defmethod platform-is :flutter [_ files-in-folder]
  (str/includes? files-in-folder "pubspec.yaml"))
(defmethod platform-is :default [] false)


(defn run-in
  [platforms-to-run callback]
  (let [files-in-folder (exec "ls -la")
        valid-platform (not-empty (filter (fn [platform] (platform-is platform files-in-folder)) platforms-to-run))]
    (if valid-platform
      callback
      (fn [] (js/console.log "You must be in the ROOT of a project to run this command!")))))