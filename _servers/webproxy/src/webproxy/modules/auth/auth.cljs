(ns src.webproxy.modules.auth.auth
  (:require ["@supabase/supabase-js" :refer [createClient]]
            [src.webproxy.infra.graphql.main :as gql]
            [promesa.core :as p]))

(defn get-all-users []
  (p/let [supabase-api-key js/globalThis.process.env.SUPABASE_API_KEY
          supabase-url js/globalThis.process.env.SUPABASE_URL
          supabase (createClient supabase-url supabase-api-key)
          response (-> (.from supabase "user")
                       (.select))
          response-parsed (js->clj response {:keywordize-keys true})
          users (:data response-parsed)]
    users))

; ========================================================================================================================
; ========================================================================================================================

; [Resolvers]
(defn auth-login []
  (p/let [users (get-all-users)
          user (first users)
          output {:token (:id user)
                  :username (:username user)}]
    output))

; [Module]
(def authModule {:typeDefs (gql/type-defs "/src/webproxy/modules/auth/auth.gql")
                 :resolvers {:Mutation {:authLogin (gql/handle-resolver auth-login)}}})
