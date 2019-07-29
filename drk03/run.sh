
REGISTRY=localhost:5000

# cd redis &&\
# APP_NAME1=drk/drk03-redis
# docker build -t ${APP_NAME1} . &&\
# docker tag ${APP_NAME1} ${REGISTRY}/${APP_NAME1} && \
# docker push ${REGISTRY}/${APP_NAME1} && \
# cd .. &&\
# \
cd app &&\
APP_NAME2=drk/drk03-app
docker build -t ${APP_NAME2} . &&\
docker tag ${APP_NAME2} ${REGISTRY}/${APP_NAME2} && \
docker push ${REGISTRY}/${APP_NAME2} && \
cd .. 


