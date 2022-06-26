(ns src.webproxy.modules.posts.posts)

(def resolvers {:Query {:posts (fn [_ _] (let [output [{:title "DevSoutinho #01"}]]
                                           (clj->js output)))}})

(def postsModule {:typeDefs (str (js/process.cwd) "/src/webproxy/modules/posts/posts.gql")
                  :resolvers resolvers})
