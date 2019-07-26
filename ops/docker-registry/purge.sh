

docker container stop $(docker container ls -aq)
docker container rm $(docker container ls -aq)
docker image prune -a
docker volume prune
docker network prune  

sudo kubectl -n default delete po,svc --all  