(ns commands.app.main
  (:require [commands.app.name :as app-name]
            [commands.app.icons :as app-icons]))


(defn define [program]
  (-> program
      app-name/define
      app-icons/define))