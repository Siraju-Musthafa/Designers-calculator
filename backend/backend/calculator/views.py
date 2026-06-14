from rest_framework.decorators import api_view
from rest_framework.response import Response
from data.models import Data


@api_view(['POST'])
def calculate(request):

    obj = Data.objects.first()

    if not obj:
        return Response({"error": "No data found"}, status=404)

    num1 = float(request.data.get('num1') or 0)
    num2 = float(request.data.get('num2') or 0)
    num3 = float(request.data.get('num3') or 0)

    result = (
        num1 * obj.kol +
        num2 * obj.viral +
        num3 * obj.hamsham
    )

    return Response({"result": result})