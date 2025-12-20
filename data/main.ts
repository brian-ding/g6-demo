import { Microservice } from "@/arch";
import { helloBff } from "./hello";

export const apim = new Microservice("apim", "APIM");
apim.dependsOn(helloBff);
