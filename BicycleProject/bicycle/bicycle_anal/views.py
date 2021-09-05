from django.shortcuts import render, get_object_or_404




# Create your views here.

def index(request):
    return render(request,'bicycle_html/home.html')

def basic_visual(request):
    return render(request,'bicycle_html/basic_visual.html')

def visual_sum(request):
    return render(request,'bicycle_html/visual_sum.html')

def visual3(request):
    return render(request,'bicycle_html/visual3.html')

def visual4(request):
    return render(request,'bicycle_html/visual4.html')

def data_intro(request):
    return render(request,'bicycle_html/data_intro.html')

def data_process(request):
    return render(request,'bicycle_html/data_process.html')

def data_anal(request):
    return render(request,'bicycle_html/data_anal.html')

def data_result(request):
    return render(request,'bicycle_html/data_result.html')






