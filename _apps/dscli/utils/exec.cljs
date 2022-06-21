(ns utils.exec
  (:require ["child_process" :refer [execSync]]))

(defn exec [command]
  (execSync command #js {:encoding "utf-8" :cwd js/process.env.DSCLI_RUNNING_AT}))
