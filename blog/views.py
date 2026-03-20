from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Post

@api_view(['GET'])
def get_posts(request):
    posts = Post.objects.all().values()
    return Response(posts)

@api_view(['POST'])
def add_post(request):
    post = Post.objects.create(
        title=request.data['title'],
        content=request.data['content']
    )
    return Response({"msg":"Post added"})