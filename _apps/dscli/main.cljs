(ns dscli.main
  (:require ["./args.js" :refer [args]]
            ["commander" :refer [Command]]
            [commands.generate-icons.main :as generate-icons]))

(def program (Command.))

(-> program
    (.name "dscli")
    (.description "DevSoutinho's Lab CLI")
    (.version "0.0.1"))

(generate-icons/define program)

(-> program
    (.command "hi")
    (.action (fn []
               (prn "CLI says: Hello!"))))

(program.parse args)