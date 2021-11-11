export const getAllTeas = () =>{
    return $.ajax({
        method: "get",
        url: "/api/teas"
    })
}
export const postTea = (tea) =>{
    return $.ajax({
        method: "post",
        url: "/api/teas",
        data: { tea: tea } //syntactic sugar { tea }
    })
}