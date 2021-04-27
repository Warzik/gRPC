To generate client protobuf code (javascript/typescript) you need to install the protobuf compiler (https://github.com/protocolbuffers/protobuf/releases).
In the path WebClient/package.json need to change compile script: 

%HOMEDRIVE%%HOMEPATH%/Programs/Protoc/bin/protoc.exe => path to your protobuf compiler exe 

"compile": "%HOMEDRIVE%%HOMEPATH%/Programs/Protoc/bin/protoc.exe --plugin=protoc-gen-ts=%CD%/node_modules/.bin/protoc-gen-ts.cmd --js_out=import_style=commonjs,binary:src/app/generated --ts_out=service=grpc-web:src/app/generated -I ../GRPC.Server/Protos/ ../GRPC.Server/Protos/*.proto"

And run: npm run compile
