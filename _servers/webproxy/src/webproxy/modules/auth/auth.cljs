(ns src.webproxy.modules.auth.auth
  (:require [src.webproxy.infra.graphql.main :as gql]
            [src.webproxy.infra.graphql.errors :as gql-errors]
            [promesa.core :as p]
            [src.webproxy.infra.jwt.main :as jwt]
            [src.webproxy.repositories.user :as user.repository]))

(def auth-secret-base js/globalThis.process.env.AUTH_SECRET_BASE)
; [Resolvers]
(defn get-user [users input]
  (p/let [user (first (filter (fn [user] (= (:email user) (:email input))) users))]
    (if user
      user
      (throw (gql-errors/Error "Please check your info, your email or password are wrong")))))

; TODO: How to use better GraphQL Context to provide access to external data
; TODO: How to test GraphQL Resolvers
; TODO: How to make integration tests on GraphQL
(defn auth-login [_ args]
  (p/let [users (user.repository/get-all-users)
          user (get-user users (:input args))
          output {:token (jwt/sign user auth-secret-base {:expiresIn "1h"})
                  :username (:username user)}] 
    output))

; [Module]
(def authModule {:typeDefs (gql/type-defs "/src/webproxy/modules/auth/auth.gql")
                 :resolvers {:Mutation {:authLogin (gql/handle-resolver auth-login)}}})
