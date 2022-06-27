(ns src.webproxy.infra.graphql.errors
  (:require ["apollo-server-errors" :refer [ApolloError]]))
; TODO: Better error handling https://www.apollographql.com/docs/apollo-server/data/errors/#custom-errors
; throw new ApolloError ('My error message', 'MY_ERROR_CODE', myCustomExtensions);
(defn Error [message]
  (new ApolloError message "BAD_USER_INPUT" nil))
