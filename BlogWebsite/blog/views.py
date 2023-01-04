from django.shortcuts import render
from .models import BlogModel

# Create your views here.
def index(request):
    blogs = BlogModel.objects.all()
    context = {'blogs' : blogs}
    return render(request, 'index.html', context)