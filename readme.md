## DOCKER
install Docker Desktop
add path Docker "C:\Program Files\Docker\Docker\resources\bin"

build (folder contain dockerfile) => docker build .
run => docker run number_build_version


# build an image based on the dockerfile in current directory. Tag it as 'stephengrider/posts'
docker build -t stephengrider/posts .
# create and start a container based on the provided image id or tag
docker run [image_id or image_tag] [cmd]
# create and start container, but also override the default command
winpty docker run -it stephengrider/posts sh
# print out information about all of the running containers
docker ps
# Execute the given command in a running container
docker exec -it [container_id] [cmd]
# Print out logs from the given container
docker logs [container_id]

