
REGISTRY=localhost:5000
APP_NAME=drk/node-web-app
MANIFEST_DIR=/var/lib/rancher/k3s/server/manifests

K8S_SPEC=drk00.yaml

docker build -t ${APP_NAME} . &&\
docker tag ${APP_NAME} ${REGISTRY}/${APP_NAME} && \
docker push ${REGISTRY}/${APP_NAME} && \
sudo cp k8s/${K8S_SPEC} ${MANIFEST_DIR} && \
sudo kubectl delete -f ${MANIFEST_DIR}/${K8S_SPEC}
sudo kubectl apply -f ${MANIFEST_DIR}/${K8S_SPEC}



# docker run -p 8080:8080 --rm -d discoridedev/node-web-app
# docker kill $(docker ps -q)
