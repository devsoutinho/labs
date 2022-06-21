(ns utils.display
  (:require ["chalk$default" :as chalk]
            [clojure.string :as str]))

(defn display-color [message color-config]
  (let [current-color (cond color-config (str/split color-config #"\.")
                            :else ["white"])
        color (apply aget (concat [chalk] current-color))]
    (color message)))

(defn display [message & [color-config]]
  (let [current-color (cond color-config (str/split color-config #"\.")
                            :else ["white"])
        color (apply aget (concat [chalk] current-color))] 
    (js/console.log (color message))))