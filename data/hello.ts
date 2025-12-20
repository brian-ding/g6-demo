import { Microservice } from "@/arch";

export const helloBff = new Microservice("hello-bff", "hello-composite-service");
export const helloCore = new Microservice("hello-core", "hello-core-service");

helloBff.dependsOn(helloCore);