(ns src.webproxy.infra.graphql.errors
  (:require ["apollo-server-errors" :refer [ApolloError UserInputError]]))

; throw new ApolloError ('My error message', 'MY_ERROR_CODE', myCustomExtensions);
(defn Error []
  (new ApolloError "My error message" "BAD_USER_INPUT" nil))
