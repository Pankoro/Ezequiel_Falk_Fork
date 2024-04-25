import registerActions from '../../actions/register/register'

exports.RegisterEvent = (ctx) => {
    if(ctx.request.body.event_id === undefined || ctx.request.body.context=== undefined || ctx.request.body.metadata=== undefined || ctx.request.body.timestamp=== undefined){
        ctx.status = 400
        ctx.body = {"status": "NOK",
        "error_message": "One or more attributes did no came on the request"}
        return ctx
    }
    ctx.body = registerActions.registerEventAboutTime(ctx.params.sec, ctx.request.body)
    return ctx
}