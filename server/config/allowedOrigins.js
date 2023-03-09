//כדיי לאפשר לגשת אליי גם מדומיינם אחרים אך כן ארצה מאובטח לא שכל אחד יוכל לגשת אליי לכן אישרתי לנווד לגשת מלוקל הוסט 3000

const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3003',
    ]
    module.exports = allowedOrigins