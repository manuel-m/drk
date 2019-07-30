
APP=drk03-app
APP_DIR=/home/drk

# pod name
# POD=$(kubectl get pods -l app=${APP} -o name);

# works for one pod only
POD="$(kubectl get pod -l app=${APP} -o jsonpath="{.items[0].metadata.name}")"

kubectl cp app/app.js ${POD}:/home/drk

# kubectl exec -it  ${POD} -- /bin/bash


# kubectl scale deployment chat --replicas=0 -n service
# kubectl get pods -n service