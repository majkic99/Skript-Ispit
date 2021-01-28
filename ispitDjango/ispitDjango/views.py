from django.http import JsonResponse
from django.shortcuts import render
from django.db.models import Sum

from .models import Fudbaleri, Timovi, Users


def home(request):
    return render(request, 'home.html')

def stats(req):
    timovi = Timovi.objects.all().order_by('-osvojeni_poeni')
    fudbaleri = Fudbaleri.objects.all().order_by('-golovi').order_by('-asistencije')
    korisnici = Users.objects.all().order_by('name')

    labels = []
    data = []

    queryset = Fudbaleri.objects.all().order_by('-golovi')
    for tim in queryset:
        labels.append(tim.ime + tim.prezime)
        data.append(tim.golovi)

    return render(req, 'stats.html',{"timovi" : timovi, "fudbaleri" : fudbaleri, "korisnici" : korisnici,'labels': labels,
        'data': data})

def table(req):
    labels = []
    data = []

    queryset = Timovi.objects.all().values('ime_tima').annotate(osvojeni_poeni=Sum('osvojeni_poeni')).order_by('-osvojeni_poeni')
    for entry in queryset:
        labels.append(entry['ime_tima'])
        data.append(entry['osvojeni_poeni'])

    return JsonResponse(data={
        'labels': labels,
        'data': data,
    })