(ns src.webproxy.modules.posts.posts-test
  (:require
   [cljs.test :as t :refer [async deftest is testing]]
   [promesa.core :as p]))

(deftest posts-awesome-test
  (testing "[posts] one equals one"
    (is (= 1 1)))
  (testing "[posts] this test will fail"
    (is (= 1 1))))

(deftest posts-awesome-async-test
  (async done
         (-> (p/let [x (p/delay 1000 :done)]
               (is (= :done x)))
             (p/finally done))))

; TODO: Make tests run better in repl
; (prn "Running in repl")
