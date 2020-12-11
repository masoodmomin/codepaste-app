from django.http.response import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import LanguageSerializer, PasteSerializer
from .models import Language, Paste

@api_view(['GET',])
def view_paste(request, slug):
    paste = Paste.objects.get(slug=slug)
    serializer = PasteSerializer(paste)
    return JsonResponse(serializer.data)

@api_view(['GET',])
def get_lang(request):
    paste = Language.objects.all()
    serializer = LanguageSerializer(paste, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def create_paste(request):
    slug = (request.data['slug'])
    if Paste.objects.filter(slug=slug).exists():
        return Response({'status': 409})
    else:
        serializer = PasteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response({'status': 200})
