function logger(request,next) {
  console.log(
      `[${request.method}] ${request.url} ${JSON.stringify(request.body)}`
  )
  next()
}

module.exports = logger