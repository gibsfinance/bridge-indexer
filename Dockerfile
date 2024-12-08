FROM --platform=$BUILDPLATFORM node:lts-slim AS base
WORKDIR /app
RUN npm i -g bun

ENV DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
COPY ./package.json /app/package.json
COPY ./bun.lockb /app/bun.lockb
COPY ./src/ /app/src/
COPY ./abis/ /app/abis/
COPY ./tsconfig.json /app/tsconfig.json
COPY ./ponder.config.ts /app/ponder.config.ts
COPY ./ponder.schema.ts /app/ponder.schema.ts
COPY ./ponder-env.d.ts /app/ponder-env.d.ts
RUN bun i

# Run the server when the container launches
CMD ["bun", "run", "start"]
