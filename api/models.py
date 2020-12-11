from django.db import models

class Language(models.Model):
    lang = models.CharField(max_length=12, unique=True)

    def __str__(self):
        return self.lang

class Paste(models.Model):
    slug = models.SlugField(unique=True)
    code = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    lang = models.ForeignKey(Language, on_delete=models.SET_NULL, blank=True, null=True, to_field='lang')