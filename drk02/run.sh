
REGISTRY=localhost:5000

cd banana &&\
APP_NAME1=drk/drk02-banana
docker build -t ${APP_NAME1} . &&\
docker tag ${APP_NAME1} ${REGISTRY}/${APP_NAME1} && \
docker push ${REGISTRY}/${APP_NAME1} && \
cd .. &&\
cd coconut &&\
APP_NAME2=drk/drk02-coconut
docker build -t ${APP_NAME2} . &&\
docker tag ${APP_NAME2} ${REGISTRY}/${APP_NAME2} && \
docker push ${REGISTRY}/${APP_NAME2} && \
cd .. 


echo "curl localhost/banana"
echo "curl localhost/coconut"