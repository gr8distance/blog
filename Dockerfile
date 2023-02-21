FROM node:14 as node

FROM elixir:1.14.2

COPY --from=node /usr/local/bin/ /usr/local/bin/
COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules

ENV LANG C.UTF-8
ENV MIX_ENV prod

RUN mix local.hex --force && \
    mix archive.install hex phx_new 1.6.15 && \
    mix local.rebar --force

WORKDIR /app

RUN apt-get update -y && \
    apt-get install -y inotify-tools

COPY mix.exs mix.exs
COPY mix.lock mix.lock

RUN mix deps.get --only-prod
RUN mix deps.compile
RUN RAILS_ENV=prod mix compile

COPY assets assets
RUN cd assets && npm install

COPY . .

EXPOSE 4000

CMD ["mix", "phx.server"]
