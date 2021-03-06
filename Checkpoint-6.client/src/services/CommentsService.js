import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService"



class CommentsService {

    async createComment(body) {
        const res = await api.post('api/comments', body)
        logger.log('create comment', res.data)
        AppState.comments.push(res.data)
    }

    async getComments(eventId) {
        const res = await api.get(`api/events/${eventId}/comments`);
        logger.log("get all my comments", res.data)
        AppState.comments = res.data
    }



    async removeComment(id) {
        const res = await api.delete(`api/comments/${id}`);
        logger.log(res.data);
        AppState.comments = AppState.comments.filter((comment) => comment.id != id)
    }
}


export const commentsService = new CommentsService()