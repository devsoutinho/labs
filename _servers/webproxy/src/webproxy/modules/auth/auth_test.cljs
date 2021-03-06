(ns src.webproxy.modules.auth.auth-test
  (:require
   [cljs.test :as t :refer [async deftest is testing]]
   [promesa.core :as p]
   [src.webproxy.modules.auth.external-file :as external-file]))

(prn "Ta rodando mesmo?")
(prn (external-file/sum))

(deftest auth-awesome-test
  (testing "[AUTH] one equals one"
    (is (= 1 1)))
  (testing "[AUTH] this test will fail"
    (is (= 1 1))))

(deftest auth-awesome-async-test
  (async done
         (-> (p/let [x (p/delay 1000 :done)]
               (is (= :done x)))
             (p/finally done))))

(comment
  ; Select t/run-tests and press "Control + Enter"
  (t/run-tests 'src.webproxy.modules.auth.auth-test))
