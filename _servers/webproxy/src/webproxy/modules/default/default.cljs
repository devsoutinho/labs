(ns src.webproxy.modules.default.default)

(def resolvers {:Query {:greet (fn [_ _] "DevSoutinho: Hello World!")}})

(def defaultModule {:typeDefs (str (js/process.cwd) "/src/webproxy/modules/default/default.gql")
                    :resolvers resolvers})
