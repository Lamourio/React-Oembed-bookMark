export function picture(object) {
    const result = {
        type: "photo",
        title: object.title,
        photoURL: object.url,
        owner: object.author_name,
        uploadDate: object.upload_date,
        html: object.html,
    }
    return result;
}
export function video(object) {
    const result = {
        type: "video",
        title: object.title,
        uploadDate: object.upload_date,
        photoURL: object.thumbnail_url,
        owner: object.author_name,
        html: object.html,
        duration: object.duration,
    }
    return result;
}

export function filterData(object) {
    console.log(object)
    if (object.type === "video") {

        return video(object);
    } else if (object.type === "photo") {
        return picture(object);
    }
}


