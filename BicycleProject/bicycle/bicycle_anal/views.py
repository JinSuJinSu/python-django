from django.shortcuts import render
import matplotlib.pyplot as plt
import io
import urllib, base64
import pandas as pd
from . import matplot



# Create your views here.



def home(request):
    plt.plot(range(10))
    fig = plt.gcf()

    buf=io.BytesIO()
    fig.savefig(buf, format='png')
    buf.seek(0)
    string = base64.b64encode(buf.read())
    uri =  urllib.parse.quote(string)
    return render(request,'home.html',{'data':uri})


# def graph1(request):
#     data = pd.read_csv('./csv_files/연도별 이용건수.csv')
#     ax = plt.gca()
#     ax.axes.get_yaxis().set_ticks([])
#     df2 = data['이용건수']
#     df2.index = [2017, 2018, 2019, 2020]
#     df2.plot(kind='bar', grid=False, figsize=(10, 10))
#     plt.xlabel('연도', fontsize=20)
#     plt.ylabel('이용건수', fontsize=20)
#     plt.xticks(fontsize=16, rotation=0)
#     for i in range(len(df2)):
#         plt.text(i, df2.iloc[i], int(df2.iloc[i] * 10 ** 7),
#                  fontsize=20,
#                  horizontalalignment='center',
#                  verticalalignment='bottom')
#
#     fig = plt.gcf()
#     buf=io.BytesIO()
#     fig.savefig(buf, format='png')
#     print(fig)
#     buf.seek(0)
#     string = base64.b64encode(buf.read())
#     uri =  urllib.parse.quote(string)
#     return render(request,'home.html',{'data':uri})





