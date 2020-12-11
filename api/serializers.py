from rest_framework import serializers
from rest_framework import fields
from .models import Language, Paste
from rest_framework.validators import UniqueValidator

class PasteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paste
        fields = ['slug', 'code', 'lang', 'date']   

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ['lang']