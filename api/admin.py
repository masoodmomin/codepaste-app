from django.contrib import admin
from .models import Language, Paste

@admin.register(Paste)
class PasteAdmin(admin.ModelAdmin):
    list_display = ['slug', 'code', 'date', 'lang']

admin.site.register(Language)