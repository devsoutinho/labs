(ns src.webproxy.modules.auth.auth-test
  (:require
   [cljs.test :as t :refer [async deftest is testing]]
   [promesa.core :as p]))

(deftest auth-awesome-test
  (testing "[AUTH] one equals one"
    (is (= 1 2)))
  (testing "[AUTH] this test will fail"
    (is (= 1 1))))

(deftest auth-awesome-async-test
  (async done
         (-> (p/let [x (p/delay 1000 :done)]
               (is (= :done x)))
             (p/finally done))))
