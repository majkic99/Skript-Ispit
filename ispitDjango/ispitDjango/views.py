from django.shortcuts import render

from .models import Fudbaleri, Timovi, Users

def stats(req):
    timovi = Timovi.objects.all()
    fudbaleri = Fudbaleri.objects.all()
    korisnici = Users.objects.all()
    return render(req, 'stats.html',{"timovi" : timovi, "fudbaleri" : fudbaleri, "korisnici" : korisnici})