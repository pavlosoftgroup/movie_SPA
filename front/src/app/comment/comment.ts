export class Comment {
    constructor(
                public movieId: string,
                public autor: string,
                public text: string,
                public date: any = Date.now(),) {
    }

}
