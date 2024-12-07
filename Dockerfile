FROM --platform=$BUILDPLATFORM node:lts-slim AS base
WORKDIR /app

RUN npm i -g bun
COPY ./package.json .
COPY ./bun.lockb .
COPY ./src/ .
COPY ./abis/ .
COPY ./tsconfig.json .
COPY ./ponder.config.ts .
COPY ./ponder.schema.ts .
COPY ./ponder-env.d.ts .
RUN bun i

# Run the server when the container launches
CMD ["bun", "run", "dev"]
