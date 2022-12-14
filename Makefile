VERSION := 0.0.4

prod:
	@npm run build
	@npm run start

build:
	@docker build . -t reecepbcups/interchain-archive:${VERSION}

push:
	@docker push reecepbcups/interchain-archive:${VERSION}

run:
	@docker run --rm --name=interchain-archive -p 5000:80 reecepbcups/interchain-archive:${VERSION}
	echo "Join via http://localhost:5000/"