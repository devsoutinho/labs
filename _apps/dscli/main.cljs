(ns dscli.main
  (:require ["./args.js" :refer [args]]
            ["commander" :refer [Command]]
            [commands.app.main :as app]
            [utils.display :refer [display]]))
  

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
