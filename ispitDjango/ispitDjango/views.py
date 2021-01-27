from django.shortcuts import render

from .models import Fudbaleri, Timovi, Users

def stats(req):
    timovi = Timovi.objects.all().order_by('-osvojeni_poeni')
    fudbaleri = Fudbaleri.objects.all().order_by('-golovi').order_by('-asistencije')
    korisnici = Users.objects.all().order_by('name')
    return render(req, 'stats.html',{"timovi" : timovi, "fudbaleri" : fudbaleri, "korisnici" : korisnici})