(ns dscli.main
  (:require ["commander" :refer [Command]]
            ["./args.js" :refer [args]]))

(def program (Command.))

(-> program
    (.name "dscli")
    (.description "DevSoutinho's Lab CLI")
    (.version "0.0.1"))

(-> program
    (.command "hi")
    (.action (fn []
               (prn "CLI says: Hello!"))))

(program.parse args)