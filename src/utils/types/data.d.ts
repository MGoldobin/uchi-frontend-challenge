interface CatResponse {
	id: string,
	url: string
}

type CatFuncResponse = CatResponse[] | []

declare module "*.svg" {
  const content: any;
  export default content;
}