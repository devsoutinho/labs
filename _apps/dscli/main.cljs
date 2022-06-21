(ns dscli.main
  (:require ["commander" :refer [Command]]
            [commands.app.main :as app]
            [utils.display :refer [display]]))
  
(def args (let [base-args (into [] (filter (fn [arg] (not= arg "./main.cljs")) js/process.argv))]
            (clj->js (if (= (count base-args) 2)
                       (conj base-args "-h")
                       base-args))))

(display "[DsCLI - Start]\n" "bgMagenta")

(def program (Command.))

(-> program
    (.name "dscli")
    (.description "DevSoutinho's Lab CLI")
    (.version "0.0.1"))

(app/define program)

(-> program
    (.command "hi")
    (.action (fn []
               (prn "CLI says: Hello!"))))

(program.parse args)

(display "\n[DsCLI - End]\n" "bgMagenta")
