(ns commands.app.main
  (:require [commands.app.name :as app-name]
            [commands.app.icon :as app-icon]))


(defn define [program]
  (-> program
      app-name/define
      app-icon/define))
