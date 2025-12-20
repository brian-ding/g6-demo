import { Microservice } from "@/arch";

export const helloGroup = {
    id: "hello-group",
    name: "Hello Services Group",
};

export const helloBff = new Microservice("hello-bff", "hello-composite-service", helloGroup);
export const helloCore = new Microservice("hello-core", "hello-core-service", helloGroup);

helloBff.dependsOn(helloCore);